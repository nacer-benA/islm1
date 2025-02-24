-- Create profiles table with email as primary key
CREATE TABLE public.profiles (
    email text PRIMARY KEY,
    full_name text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Create recipes table with email as foreign key reference to profiles
CREATE TABLE public.recipes (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    ingredients text[] NOT NULL DEFAULT '{}',
    instructions text[] NOT NULL DEFAULT '{}',
    image_url text,
    author_email text REFERENCES public.profiles(email) ON DELETE CASCADE,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE public.products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    description text,
    benefits text[] NOT NULL DEFAULT '{}',
    image_url text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
    email text PRIMARY KEY,
    created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (auth.email() = email);

CREATE POLICY "Users can update their own profile"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (auth.email() = email);

-- Recipes policies
CREATE POLICY "Anyone can view recipes"
    ON public.recipes
    FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Authenticated users can create recipes"
    ON public.recipes
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Users can update their own recipes"
    ON public.recipes
    FOR UPDATE
    TO authenticated
    USING (auth.email() = author_email);

-- Products policies
CREATE POLICY "Anyone can view products"
    ON public.products
    FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Only authenticated users can create products"
    ON public.products
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Newsletter subscribers policies
CREATE POLICY "Anyone can subscribe to newsletter"
    ON public.newsletter_subscribers
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_recipes_updated_at
    BEFORE UPDATE ON public.recipes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
