import { Suspense } from "react";
import SlowLoading from "./SlowLoadingComponent";

export default async function FasterLoadingComponent(){

    const text = await new Promise((resolve) => {
        setTimeout(() => resolve('Faster loading component'), 1000); 
      });

    return (
        <>
            <p>{text}</p>
            <input style={{color: 'black'}} type="text" />
            <Suspense fallback={<p>loading slowLoadingComponent</p>}>
                <SlowLoading />
            </Suspense>
        </>
    )
}