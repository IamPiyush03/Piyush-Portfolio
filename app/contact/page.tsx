"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})
type ContactValues = z.infer<typeof ContactSchema>

export default function ContactPage() {
  const { toast } = useToast()
  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(values: ContactValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to send message")
      }
      toast({ title: "Message sent", description: "Thanks! I will get back to you soon." })
      form.reset()
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err?.message || "Please try again later.", variant: "destructive" as any })
    }
  }
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-[#2d5016]">
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="font-pixel text-2xl md:text-4xl mb-4 text-[#2d5016]">GET IN TOUCH</h1>
          <div className="w-24 h-1 bg-[#ff6b35] mx-auto mb-6"></div>
          <p className="font-mono text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#2d5016]">
            <CardHeader>
              <CardTitle className="font-pixel text-xl text-[#2d5016] mb-2">CONTACT INFO</CardTitle>
              <CardDescription className="font-mono text-base text-[#2d5016]/80">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#ff6b35] border-2 border-[#2d5016] flex items-center justify-center shadow-[4px_4px_0px_0px_#2d5016]">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-[#2d5016] mb-1">EMAIL</h3>
                  <a href="mailto:piyushdhondge3@gmail.com" className="font-mono text-[#4169e1] hover:underline">
                    piyushdhondge3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#4169e1] border-2 border-[#2d5016] flex items-center justify-center shadow-[4px_4px_0px_0px_#2d5016]">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-[#2d5016] mb-1">PHONE</h3>
                  <a href="tel:+918830164826" className="font-mono text-[#4169e1] hover:underline">
                    +91-8830164826
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2d5016] border-2 border-[#2d5016] flex items-center justify-center shadow-[4px_4px_0px_0px_#2d5016]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-pixel text-sm text-[#2d5016] mb-1">LOCATION</h3>
                  <p className="font-mono text-[#2d5016]/80">Pune, India</p>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-[#2d5016]">
                <h3 className="font-pixel text-sm text-[#2d5016] mb-4">CONNECT WITH ME</h3>
                <div className="flex gap-4">
                  <Button
                    size="sm"
                    className="bg-[#4169e1] hover:bg-[#4169e1]/90 text-white font-mono border-2 border-[#2d5016] shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/piyush-dhondge" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-1" />
                      LINKEDIN
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-[#2d5016] text-[#2d5016] hover:bg-[#2d5016] hover:text-white font-mono shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/IamPiyush03" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      GITHUB
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-mono border-2 border-[#2d5016] shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1"
                    asChild
                  >
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      PORTFOLIO
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#2d5016]">
            <CardHeader>
              <CardTitle className="font-pixel text-xl text-[#2d5016] mb-2">SEND MESSAGE</CardTitle>
              <CardDescription className="font-mono text-base text-[#2d5016]/80">
                Have a project in mind? Let's discuss it!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-pixel text-sm text-[#2d5016]">NAME *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="border-2 border-[#2d5016] font-mono focus:ring-[#ff6b35] focus:border-[#ff6b35] shadow-[4px_4px_0px_0px_#2d5016] focus:shadow-[2px_2px_0px_0px_#2d5016]"
                              placeholder="Your Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-pixel text-sm text-[#2d5016]">EMAIL *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="border-2 border-[#2d5016] font-mono focus:ring-[#ff6b35] focus:border-[#ff6b35] shadow-[4px_4px_0px_0px_#2d5016] focus:shadow-[2px_2px_0px_0px_#2d5016]"
                              placeholder="your.email@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-pixel text-sm text-[#2d5016]">SUBJECT *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="border-2 border-[#2d5016] font-mono focus:ring-[#ff6b35] focus:border-[#ff6b35] shadow-[4px_4px_0px_0px_#2d5016] focus:shadow-[2px_2px_0px_0px_#2d5016]"
                            placeholder="Project Discussion / Job Opportunity / Collaboration"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-pixel text-sm text-[#2d5016]">MESSAGE *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="border-2 border-[#2d5016] font-mono focus:ring-[#ff6b35] focus:border-[#ff6b35] shadow-[4px_4px_0px_0px_#2d5016] focus:shadow-[2px_2px_0px_0px_#2d5016] min-h-[120px]"
                            placeholder="Tell me about your project, requirements, or how we can work together..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-pixel border-2 border-[#2d5016] shadow-[4px_4px_0px_0px_#2d5016] hover:shadow-[2px_2px_0px_0px_#2d5016] active:shadow-none active:translate-x-1 active:translate-y-1 py-6"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-[#2d5016] border-4 border-[#2d5016] shadow-[8px_8px_0px_0px_#ff6b35] max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-pixel text-xl text-white mb-4">READY TO START YOUR PROJECT?</h2>
              <p className="font-mono text-white/90 mb-6">
                I'm always excited to work on new challenges and innovative projects. Let's turn your ideas into
                reality!
              </p>
              <Button
                className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white font-pixel border-2 border-white shadow-[4px_4px_0px_0px_white] hover:shadow-[2px_2px_0px_0px_white] active:shadow-none active:translate-x-1 active:translate-y-1"
                asChild
              >
                <a href="mailto:piyushdhondge3@gmail.com">LET'S COLLABORATE</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
