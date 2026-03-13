import { Link } from '@tanstack/react-router';
import { BookOpen, Users, Award, Heart, ArrowRight, GraduationCap, Target, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Welcome
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Mount Paradise
                <span className="block text-primary mt-2">Public School</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                An educational institution providing quality education along with good values. 
                A safe, supportive, and inspiring environment for every student.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/registration">
                    Apply for Admission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src="/assets/generated/school-building.dim_1200x600.png"
                alt="Mount Paradise Public School Building"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Mount Paradise, we focus on personality development along with education
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Engaging and easy learning through modern and effective teaching methods
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Experienced Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personal attention from dedicated and experienced teachers
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Moral Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Special emphasis on discipline, values, and moral education
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Holistic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participation in sports, cultural programs, and other activities
                </CardDescription>
              </CardContent>
            </Card>
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
                Holistic Development of Every Child
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  We believe that every child is special in their own way. Our goal is to 
                  provide each student with a safe, supportive, and inspiring environment where 
                  they can develop their full potential.
                </p>
                <p className="text-lg">
                  Here, along with education, special attention is given to discipline, moral values, 
                  and personality development. Our experienced teachers use new and effective teaching 
                  methods to make learning interesting and easy.
                </p>
              </div>
              <Button asChild size="lg" className="gap-2">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Commitment to Building Responsible Citizens
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our effort is to strengthen the future of our students
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Providing high-quality education and practical knowledge
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Values and Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Development of moral values and good character
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Creating a supportive and inclusive learning community
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Join Our School?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Start your child's journey towards a bright future at Mount Paradise Public School
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button asChild size="lg" className="gap-2">
                    <Link to="/admissions">
                      View Admission Process
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
