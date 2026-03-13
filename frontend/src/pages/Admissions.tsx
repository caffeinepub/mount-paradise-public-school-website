import { Calendar, FileText, Users, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Admissions() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Users className="h-4 w-4" />
              Admission Process
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Admission Information
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Begin your child's bright future at Mount Paradise Public School
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent admission procedure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Registration Form</h3>
                  <p className="text-muted-foreground">
                    Obtain the admission form from the school office or download it from our website. 
                    Fill out the form carefully and attach the required documents.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Document Submission</h3>
                  <p className="text-muted-foreground">
                    Submit the completed form along with required documents to the school office. 
                    Required documents include birth certificate, previous class mark sheet, and identity proof.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Interview</h3>
                  <p className="text-muted-foreground">
                    A brief interview will be conducted with the student and parent/guardian. 
                    This is to build better understanding between the school and family.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Step 4 */}
              <div className="flex gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">Admission Confirmation</h3>
                  <p className="text-muted-foreground">
                    After selection, pay the admission fee and confirm the admission. 
                    You will be provided with an admission letter and other necessary information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The following documents are required for admission
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Certified copy of birth certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Previous class mark sheet and transfer certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Copy of Aadhaar card (both student and parent/guardian)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Residence proof</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Recent passport size photographs (4 copies)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Medical certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Fee Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable and transparent fee structure
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Primary (Classes 1-5)</CardTitle>
                <CardDescription>Per Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-semibold">₹12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Admission Fee</span>
                    <span className="font-semibold">₹2,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹14,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>Middle (Classes 6-8)</CardTitle>
                <CardDescription>Per Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-semibold">₹15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Admission Fee</span>
                    <span className="font-semibold">₹2,500</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹17,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary (Classes 9-10)</CardTitle>
                <CardDescription>Per Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuition Fee</span>
                    <span className="font-semibold">₹18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Admission Fee</span>
                    <span className="font-semibold">₹3,000</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹21,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Fee does not include books, uniform, and transportation
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Important Dates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Admission schedule for academic year 2026-27
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">Admission Forms Available</h3>
                        <span className="text-sm text-muted-foreground">January 1, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Admission forms will be available at the school office and website
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">Last Date for Form Submission</h3>
                        <span className="text-sm text-muted-foreground">February 28, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        All completed forms must be submitted by this date
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">Interviews</h3>
                        <span className="text-sm text-muted-foreground">March 1-15, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Interviews for selected candidates will be conducted
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">Result Announcement</h3>
                        <span className="text-sm text-muted-foreground">March 20, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        List of selected students will be published
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold">New Session Begins</h3>
                        <span className="text-sm text-muted-foreground">April 1, 2026</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Start of academic year 2026-27
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Need More Information About Admissions?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our admissions team is ready to assist you
                </p>
                <div className="flex flex-wrap gap-6 justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>admissions@mountparadise.edu</span>
                  </div>
                </div>
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
