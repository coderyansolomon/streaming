export default async function SlowLoading(){

    const text = await new Promise((resolve) => {
        setTimeout(() => resolve('slow loading'), 8000); 
      });

    return <p>{text}</p>
}