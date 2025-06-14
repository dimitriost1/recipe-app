export async function generateMetadata({ params }) {
  const { recipeId } = await params;

  return {
    title: `${recipeId} title`,
    description: `${recipeId} description goes here`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`https://dummyjson.com/recipes`);
  const recipes = await res.json();

  return recipes.recipes.map((recipe) => ({
    recipeId: recipe.id.toString(),
  }));
}

const Recipe = async ({ params }) => {
  const { recipeId } = await params;

  const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {
    next: { revalidate: 60 },
  });
  const recipe = await res.json();

  return <h1 className="text-center text-bold p-20">{recipe.name}</h1>;
};

export default Recipe;
