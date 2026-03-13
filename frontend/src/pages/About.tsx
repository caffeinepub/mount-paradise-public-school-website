import { BookOpen, Users, Award, Target, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              About Us
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Mount Paradise Public School
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Building a strong foundation for your child's bright future
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Holistic Development of Every Student
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Mount Paradise Public School is committed to providing quality education that 
                  nurtures not just academic excellence but also character development. We believe 
                  in creating an environment where every child can discover and develop their unique 
                  talents and abilities.
                </p>
                <p className="text-lg">
                  Our mission is to prepare students to become responsible, compassionate, and 
                  successful individuals who contribute positively to society. We focus on building 
                  strong moral values, critical thinking skills, and a lifelong love for learning.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/school-building.dim_1200x600.png"
                alt="School Building"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src="/assets/generated/classroom.dim_800x600.png"
                  alt="Classroom"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="/assets/generated/library.dim_800x600.png"
                  alt="Library"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover sm:mt-8"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <GraduationCap className="h-4 w-4" />
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Excellence in Education and Character
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We envision Mount Paradise Public School as a center of educational excellence 
                  where students are empowered to reach their full potential. Our vision is to 
                  create future leaders who are academically strong, morally upright, and socially 
                  responsible.
                </p>
                <p className="text-lg">
                  Through innovative teaching methods, modern facilities, and a supportive learning 
                  environment, we aim to inspire students to become lifelong learners and positive 
                  contributors to their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Educational Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to learning that develops the whole child
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our curriculum is designed to meet contemporary educational standards while 
                  incorporating traditional values and practical life skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We employ interactive teaching methods that encourage student participation, 
                  critical thinking, and collaborative learning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Individual Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Small class sizes ensure that each student receives personalized attention 
                  and support from our dedicated teachers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Character Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We emphasize moral values, ethics, and character development alongside 
                  academic achievement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Co-curricular Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sports, arts, music, and cultural activities are integral parts of our 
                  educational program.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Goal-Oriented Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We help students set and achieve academic and personal goals, preparing 
                  them for future success.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Excellence</h3>
                      <p className="text-sm text-muted-foreground">
                        Striving for the highest standards in all aspects of education and character development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Integrity</h3>
                      <p className="text-sm text-muted-foreground">
                        Upholding honesty, ethics, and moral values in all our actions and decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Respect</h3>
                      <p className="text-sm text-muted-foreground">
                        Treating everyone with dignity, kindness, and understanding regardless of differences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Responsibility</h3>
                      <p className="text-sm text-muted-foreground">
                        Encouraging students to take ownership of their learning and actions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Innovation</h3>
                      <p className="text-sm text-muted-foreground">
                        Embracing new ideas and methods to enhance the learning experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Lifelong Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Fostering curiosity and a passion for continuous learning and growth.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
