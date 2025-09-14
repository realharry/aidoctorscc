import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Stethoscope, Brain, Heart, Eye, Pill, Activity } from "lucide-react"

const aiDoctors = [
  {
    id: 1,
    title: "Dr. CardioAI",
    description: "Specialized in cardiovascular health analysis and heart condition assessment.",
    icon: Heart,
    specialty: "Cardiology"
  },
  {
    id: 2,
    title: "Dr. NeuroMind",
    description: "Advanced neurological diagnostics and brain health monitoring specialist.",
    icon: Brain,
    specialty: "Neurology"
  },
  {
    id: 3,
    title: "Dr. VisionCare",
    description: "Expert in ophthalmology and comprehensive eye health evaluations.",
    icon: Eye,
    specialty: "Ophthalmology"
  },
  {
    id: 4,
    title: "Dr. PharmaGuide",
    description: "Intelligent medication management and drug interaction analysis.",
    icon: Pill,
    specialty: "Pharmacology"
  },
  {
    id: 5,
    title: "Dr. VitalWatch",
    description: "Real-time vital signs monitoring and health trend analysis.",
    icon: Activity,
    specialty: "General Practice"
  },
  {
    id: 6,
    title: "Dr. DiagnosticPro",
    description: "Comprehensive diagnostic support and clinical decision assistance.",
    icon: Stethoscope,
    specialty: "Diagnostics"
  }
]

const faqs = [
  {
    question: "What are AI Medical Agents?",
    answer: "AI Medical Agents are specialized artificial intelligence systems trained on vast medical datasets to assist healthcare professionals in diagnosis, treatment planning, and patient care. They combine machine learning with medical expertise to provide accurate, evidence-based recommendations."
  },
  {
    question: "How accurate are these AI doctors?",
    answer: "Our AI doctors are trained on extensive medical literature and clinical data, achieving high accuracy rates in their specialized domains. However, they are designed to assist and support human medical professionals, not replace them. All recommendations should be validated by qualified healthcare providers."
  },
  {
    question: "Are AI medical consultations secure?",
    answer: "Yes, all interactions with our AI medical agents are encrypted and comply with healthcare privacy standards including HIPAA. Patient data is processed securely and is never shared with third parties without explicit consent."
  },
  {
    question: "Can I use these AI doctors for diagnosis?",
    answer: "Our AI doctors provide educational information and preliminary assessments, but they cannot replace professional medical diagnosis. Always consult with qualified healthcare professionals for medical diagnosis and treatment decisions."
  },
  {
    question: "What makes each AI doctor specialized?",
    answer: "Each AI doctor is trained on specialized medical datasets relevant to their field. They have deep knowledge in their respective specialties and are continuously updated with the latest medical research and best practices in their domains."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Meet Your{" "}
              <span className="text-gradient">AI Medical</span>{" "}
              Specialists
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto">
              Experience the future of healthcare with our specialized AI agents. Each doctor brings 
              deep expertise in their medical field, providing intelligent assistance and insights 
              to support better health outcomes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore AI Doctors
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.accent/20),transparent)]" />
      </section>

      {/* AI Doctor Showcase Section */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Specialized AI Doctors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Each AI doctor is expertly trained in their medical specialty, ready to assist 
              with professional insights and evidence-based recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {aiDoctors.map((doctor) => {
              const IconComponent = doctor.icon
              return (
                <Card key={doctor.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{doctor.title}</CardTitle>
                    <div className="text-sm font-medium text-accent">{doctor.specialty}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {doctor.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      Consult Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our AI medical agents and how they can 
              assist with your healthcare needs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">AI Doctors CC</h3>
            <p className="text-muted-foreground mb-6">
              Advancing healthcare through intelligent AI medical assistance
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 AI Doctors CC</span>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
