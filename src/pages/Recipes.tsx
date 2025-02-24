import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Recipe } from '../lib/supabase';

const Recipes = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRecipes(data || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredRecipes = [
    {
      title: 'Honey & Date Energy Balls',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=2070&auto=format&fit=crop',
      description: 'A healthy snack combining the natural sweetness of dates with pure honey.',
      prepTime: '15 mins',
      servings: 12,
      difficulty: 'Easy',
    },
    {
      title: 'Black Seed & Honey Immune Booster',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070&auto=format&fit=crop',
      description: 'A traditional remedy to strengthen your immune system.',
      prepTime: '5 mins',
      servings: 1,
      difficulty: 'Easy',
    },
    {
      title: 'Olive Oil & Za\'atar Bread',
      image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=2070&auto=format&fit=crop',
      description: 'A delicious bread dip featuring blessed olive oil.',
      prepTime: '10 mins',
      servings: 4,
      difficulty: 'Easy',
    },
    {
      title: 'Fig & Pomegranate Salad',
      image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?q=80&w=2070&auto=format&fit=crop',
      description: 'A refreshing salad combining fruits mentioned in the Quran.',
      prepTime: '20 mins',
      servings: 4,
      difficulty: 'Medium',
    },
    {
      title: 'Black Seed Honey Tea',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2070&auto=format&fit=crop',
      description: 'A soothing tea blend with immune-boosting properties.',
      prepTime: '8 mins',
      servings: 2,
      difficulty: 'Easy',
    },
    {
      title: 'Date & Almond Smoothie',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=2070&auto=format&fit=crop',
      description: 'A nutritious smoothie perfect for suhoor or iftar.',
      prepTime: '10 mins',
      servings: 2,
      difficulty: 'Easy',
    },
  ];

  return (
    <div className="min-h-screen bg-sand-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-sand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-white mb-6"
            >
              Blessed Recipes for Modern Living
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Discover delicious and healthy recipes featuring products mentioned in the Quran
            </motion.p>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${recipe.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-sand-900 mb-2">{recipe.title}</h3>
                  <p className="text-sand-600 mb-4">{recipe.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="h-5 w-5 text-sand-400 mx-auto mb-1" />
                      <span className="text-sm text-sand-600">{recipe.prepTime}</span>
                    </div>
                    <div className="text-center">
                      <Users className="h-5 w-5 text-sand-400 mx-auto mb-1" />
                      <span className="text-sm text-sand-600">Serves {recipe.servings}</span>
                    </div>
                    <div className="text-center">
                      <ChefHat className="h-5 w-5 text-sand-400 mx-auto mb-1" />
                      <span className="text-sm text-sand-600">{recipe.difficulty}</span>
                    </div>
                  </div>
                  <button className="w-full bg-sand-900 text-white px-4 py-2 rounded-md font-medium hover:bg-sand-800 transition-colors flex items-center justify-center">
                    View Recipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-sand-900 mb-4">
              Recipe Categories
            </h2>
            <p className="text-sand-600 max-w-2xl mx-auto">
              Explore our collection of recipes organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Healing Remedies',
                description: 'Traditional recipes for wellness and immunity',
                icon: Clock,
              },
              {
                title: 'Daily Nutrition',
                description: 'Healthy meals for everyday nourishment',
                icon: Users,
              },
              {
                title: 'Sacred Sweets',
                description: 'Desserts made with blessed ingredients',
                icon: ChefHat,
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <category.icon className="h-8 w-8 text-sand-900 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-sand-900 mb-2">{category.title}</h3>
                <p className="text-sand-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;