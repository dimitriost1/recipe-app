export async function generateMetadata({ params }) {
  const { recipeId } = await params;

  return {
    title: `${recipeId} title`,
    description: `${recipeId} description goes here`,
  };
}

const Recipe = async ({ params }) => {
  const { recipeId } = await params;

  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const recipe = await res.json();

  return <h1 className="text-center text-bold p-20">{recipe.name}</h1>;
};

export default Recipe;
