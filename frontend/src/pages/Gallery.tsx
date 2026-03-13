import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';

const galleryImages = [
  {
    src: '/assets/generated/school-building.dim_1200x600.png',
    alt: 'School Building',
    title: 'School Building',
    category: 'infrastructure',
  },
  {
    src: '/assets/generated/classroom.dim_800x600.png',
    alt: 'Modern Classroom',
    title: 'Modern Classroom',
    category: 'infrastructure',
  },
  {
    src: '/assets/generated/library.dim_800x600.png',
    alt: 'Library',
    title: 'Library',
    category: 'infrastructure',
  },
  {
    src: '/assets/generated/school-bus.dim_800x600.png',
    alt: 'Mount Paradise Public School transport bus',
    title: 'School Bus',
    category: 'facilities',
  },
  {
    src: '/assets/generated/sports-activity.dim_800x600.png',
    alt: 'Sports Activity',
    title: 'Sports Activities',
    category: 'activities',
  },
  {
    src: '/assets/generated/cultural-event.dim_800x600.png',
    alt: 'Cultural Event',
    title: 'Cultural Event',
    category: 'events',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Glimpses of our school - facilities, activities, and events
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-lg">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="relative aspect-video">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{image.title}</h3>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Various types of activities and programs are organized at the school
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src="/assets/generated/classroom.dim_800x600.png"
                  alt="Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-muted-foreground">
                School campus equipped with modern facilities
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src="/assets/generated/sports-activity.dim_800x600.png"
                  alt="Activities"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sports Activities</h3>
              <p className="text-muted-foreground">
                Active participation of students in various sports
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src="/assets/generated/cultural-event.dim_800x600.png"
                  alt="Events"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
              <p className="text-muted-foreground">
                Annual festivals and cultural competitions
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
