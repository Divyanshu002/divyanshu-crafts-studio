import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/PhoneInput'
import { Sparkles, Palette, Hammer, Star } from 'lucide-react'

const HomePage = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, phone, email, message })
    // Add form submission logic here
  }

  const features = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique and personalized craft designs tailored to your vision"
    },
    {
      icon: Hammer,
      title: "Expert Craftsmanship",
      description: "Years of experience creating beautiful handmade pieces"
    },
    {
      icon: Sparkles,
      title: "Premium Materials",
      description: "Only the finest materials used in every creation"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "100% satisfaction guarantee on all our work"
    }
  ]

  return (
    <div className="min-h-screen gradient-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 animate-entrance">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-bounce-subtle">
            Divyanshu Crafts Studio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Creating beautiful, handcrafted pieces that tell your story with passion and precision
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="animate-scale-in">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="animate-scale-in">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Why Choose Our Studio?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center group animate-slide-up glass-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 smooth-transition">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 smooth-transition" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto animate-fade-in glass-effect">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
            <CardDescription className="text-center">
              Ready to bring your vision to life? Contact us today!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="animate-scale-in"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <PhoneInput
                  id="phone"
                  value={phone}
                  onValueChange={setPhone}
                  className="animate-scale-in"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="animate-scale-in"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 smooth-transition hover:border-primary/50 focus:border-primary animate-scale-in"
                />
              </div>
              
              <Button type="submit" className="w-full animate-scale-in">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Divyanshu Crafts Studio. Made with ❤️ and creativity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage