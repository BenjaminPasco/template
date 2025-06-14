import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const core = await import("@lib/core");
  const users = core.getAllUsers();
  return { data: users };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const data = loaderData.data;
  return (
    <>
      <ul>
        <li>
          <h1>Users</h1>
          {data.length === 0 ? (
            "[]"
          ) : (
            <ul>
              {data.map((user) => (
                <li>{user.name}</li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}
