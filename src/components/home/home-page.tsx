import HomePageForm from "./home-page-form";

export const HomePage = () => {
  return (
    <main className="bg-muted/50 flex flex-1 flex-col items-center justify-center p-6">
      <h1 className="mb-6 text-4xl font-bold">Добро пожаловать в Tts</h1>
      <p className="text-muted-foreground mb-8 max-w-2xl text-center text-xl">
        Внесите файл jpeg, png формата
      </p>
      <HomePageForm />
    </main>
  );
};
