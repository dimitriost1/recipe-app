import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/recipes");
  const recipes = await res.json();

  return (
    <ol className="ml-auto text-center">
      {recipes.recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link href={`/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ))}
    </ol>
  );
}
