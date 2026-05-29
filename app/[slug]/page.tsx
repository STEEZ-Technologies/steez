import { notFound } from "next/navigation";
import { getCatalogueBySlug } from "@/lib/data/catalogue";
import { ClientThemeProvider } from "@/components/shared/ClientThemeProvider";
import { Nav } from "@/components/hero/Nav";
import { Footer } from "@/components/footer/Footer";

export const dynamic = "force-dynamic";

interface CataloguePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CataloguePage({ params }: CataloguePageProps) {
  const { slug } = await params;
  
  // 1. Fetch data from PostgreSQL via the Drizzle DAL
  const data = await getCatalogueBySlug(slug);

  if (!data) {
    notFound();
  }

  // 2. Default theme fallback or use branding from DB
  const clientTheme = {
    primaryColor: (data.branding as any)?.primaryColor || "#1D9E75",
    secondaryColor: (data.branding as any)?.secondaryColor || "#E0A93A",
    accentColor: (data.branding as any)?.primaryColor || "#1D9E75",
    backgroundColor: (data.branding as any)?.backgroundColor || "#04342C",
    textColor: (data.branding as any)?.textColor || "#FAF9F5",
  };

  return (
    <ClientThemeProvider theme={clientTheme}>
      <main className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors duration-500">
        <Nav />
        
        {/* 
          This is where your "Storytelling Engine" comes to life.
          You can create a "StoryRenderer" that loops through sections 
          or manually build the client's story here.
        */}
        <div className="flex min-h-[80vh] flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter md:text-8xl">
            {data.name}
          </h1>
          <p className="max-w-2xl text-lg opacity-70">
            Welcome to the digital showroom for {data.name}. 
            This is a storytelling catalogue powered by STEEZ.
          </p>
          
          {/* Example: Displaying Product count */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
             {data.products.map((product) => (
               <div key={product.id} className="rounded-2xl border border-[var(--hairline)] p-6 bg-[var(--card-bg)]">
                 <h3 className="font-bold uppercase">{product.name}</h3>
                 <p className="text-sm opacity-60">{product.sku}</p>
               </div>
             ))}
          </div>
        </div>

        <Footer />
      </main>
    </ClientThemeProvider>
  );
}
