import { db } from "../server/db";
import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/1c9c63a6-6036-4cc1-bf0e-cd13bb907e16-58o6v3.webp",
    "https://utfs.io/f/130b0179-de3c-43bb-96dd-95eccbb08f25-n8sdrr.jpg",
    "https://utfs.io/f/b7993d05-92eb-447b-9f45-e4b09aac3657-mmbgac.webp",
    "https://utfs.io/f/e1207604-01a6-45b8-b58d-4224d6a7fa7e-mmbgab.webp"
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {posts.map((post) => (
            <div key={post.id}>{post.name}</div>
        ))}
            {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                <div key={image.id + "-" + index} className="w-48">
                  <img src={image.url}/>
                </div>
            ))}
            </div>
       </main>
  );
}
