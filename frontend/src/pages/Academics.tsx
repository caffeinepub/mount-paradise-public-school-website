import { BookOpen, Users, Award, Sparkles, Music, Palette, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Academics() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              Academic Programs
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Curriculum & Programs
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Comprehensive education from primary to secondary level
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Curriculum
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A well-structured curriculum designed for comprehensive development
            </p>
          </div>

          <Tabs defaultValue="primary" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="primary">Primary Education</TabsTrigger>
              <TabsTrigger value="middle">Middle School</TabsTrigger>
              <TabsTrigger value="secondary">Secondary Education</TabsTrigger>
            </TabsList>

            <TabsContent value="primary" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Education (Classes 1-5)</CardTitle>
                  <CardDescription>
                    Building a strong foundation in basic subjects and life skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Core Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• English Language</li>
                        <li>• Hindi Language</li>
                        <li>• Mathematics</li>
                        <li>• Environmental Studies</li>
                        <li>• General Knowledge</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Additional Activities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Art & Craft</li>
                        <li>• Physical Education</li>
                        <li>• Music & Dance</li>
                        <li>• Moral Education</li>
                        <li>• Computer Basics</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Middle School (Classes 6-8)</CardTitle>
                  <CardDescription>
                    Expanding knowledge and developing critical thinking skills
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Core Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• English Language & Literature</li>
                        <li>• Hindi Language & Literature</li>
                        <li>• Mathematics</li>
                        <li>• Science (Physics, Chemistry, Biology)</li>
                        <li>• Social Studies (History, Geography, Civics)</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Additional Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Computer Science</li>
                        <li>• Physical Education</li>
                        <li>• Art & Craft</li>
                        <li>• Music</li>
                        <li>• Value Education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="secondary" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Secondary Education (Classes 9-10)</CardTitle>
                  <CardDescription>
                    Preparing students for board examinations and future careers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Core Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• English Language & Literature</li>
                        <li>• Hindi Language & Literature</li>
                        <li>• Mathematics</li>
                        <li>• Science (Physics, Chemistry, Biology)</li>
                        <li>• Social Science</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Additional Subjects:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Computer Applications</li>
                        <li>• Physical Education</li>
                        <li>• Art Education</li>
                        <li>• Work Experience</li>
                        <li>• Career Guidance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern and effective teaching approaches for better learning outcomes
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engaging classroom sessions with student participation, discussions, and 
                  hands-on activities to make learning enjoyable and effective.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personalized Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Small class sizes ensure that each student receives individual attention 
                  and support based on their unique learning needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Practical Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Emphasis on practical applications and real-world examples to help 
                  students understand concepts better and retain knowledge.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              Beyond Academics
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Co-curricular Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Developing well-rounded personalities through diverse activities
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Sports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cricket, Football, Volleyball, Athletics, and other sports activities 
                  for physical fitness and team spirit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Music & Dance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Vocal and instrumental music classes, classical and modern dance 
                  training for artistic expression.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Arts & Crafts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Drawing, painting, sculpture, and various craft activities to nurture 
                  creativity and artistic skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Annual functions, festivals, competitions, and cultural programs 
                  celebrating diversity and talent.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
