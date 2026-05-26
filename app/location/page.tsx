import { ViewOnMap } from '@/components/ui/view-on-map';

export default function LocationPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-zinc-950">
      <ViewOnMap
        locationName="Big Belly Burger"
        address="75 Charles St, Boston, MA 02114"
      />
    </div>
  );
}