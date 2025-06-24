import { BackButton, Card } from "@/shared/ui";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <Card className="p-8 text-center space-y-4 shadow-lg max-w-md">
        <h1 className="text-6xl font-bold text-destructive">404</h1>
        <p className="text-lg text-muted-foreground">
          Упс! Страница не найдена
        </p>
        <p className="text-sm text-muted-foreground">
          Возможно, вы ошиблись в адресе, или страница была удалена.
        </p>
        <BackButton />
      </Card>
    </div>
  );
}
