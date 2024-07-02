import FasterLoadingComponent from "./_components/FasterLoadingComponent";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
      <Suspense fallback={<p>loading fasterLoading component</p>}>
      <FasterLoadingComponent />
      </Suspense>
    </main>
  );
}
