"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Check, Rocket } from "lucide-react";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">shadcn/ui Components</h1>
            </div>
            <Badge variant="secondary">v1.0.0</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold tracking-tight">
            Beautiful UI Components
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of shadcn/ui components. Built with React,
            TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        {/* Buttons Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Buttons</h3>
            <p className="text-muted-foreground">
              Various button styles and variants
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles for various use cases
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Forms Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Form Elements</h3>
            <p className="text-muted-foreground">
              Input fields, selects, and form controls
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
                <CardDescription>Text inputs and labels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select & Options</CardTitle>
                <CardDescription>Dropdown selections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Choose a framework</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Radio Group Section */}
        <Card>
          <CardHeader>
            <CardTitle>Radio Group</CardTitle>
            <CardDescription>Select one option from multiple choices</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Option Three</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Tabs</h3>
            <p className="text-muted-foreground">Organize content in tabs</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Username</Label>
                    <Input placeholder="@username" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Make changes to your account here.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Current password</Label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label>New password</Label>
                    <Input type="password" />
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Configure your application settings here.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Switch id="dark-mode" />
                    <Label htmlFor="dark-mode">Dark mode</Label>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Badges & Avatars */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Badges & Avatars</h3>
            <p className="text-muted-foreground">
              Status badges and user avatars
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dialog */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Dialog</h3>
            <p className="text-muted-foreground">Modal dialog windows</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Dialog Example</CardTitle>
              <CardDescription>
                Click the button to open a dialog
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-end gap-4">
                    <Button
                      variant="outline"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => setDialogOpen(false)}
                    >
                      Confirm
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Accordion</h3>
            <p className="text-muted-foreground">
              Collapsible content sections
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern and is fully
                    keyboard navigable.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Alerts</h3>
            <p className="text-muted-foreground">
              Important messages and notifications
            </p>
          </div>
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-semibold">shadcn/ui Components Library</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
