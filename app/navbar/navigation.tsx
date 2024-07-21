"use client"
import * as React from "react"

import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Logo from "./logo"
const components : {
  title:string ,
  description:string,
}[]=[{
  title: "Frozen",

  description:
    "Recommended template for most use cases. Includes all the components you need to get started.",
},
{
  title: "Swift",

  description:
    "A template with a minimal set of components. Use this template if you want to build your own components.",
},
{
  title: "Tuscany",

  description:
    "Advanced template with more components and features. Use this template if you want to build a complex UI.",
},
{
  title: "Amber",

  description: "Great for building a marketing or landing page.",
},
{
  title: "Tide",

  description:
    "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
},
{
  title: "Mint",

  description:
    "Nice template for building a blog or a content-heavy website.",
},
  

]
export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList
      className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className = 'text-[#2D0704]'>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-[#faecec]'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-[#B6465F] from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />
                    <div className="mb-2 mt-1 text-lg font-medium text-white">
                     
                    </div>
                    
                  </a>
                </NavigationMenuLink>
              </li>
              
              <ListItem href="/docs/installation" title="Blog" text-black>
                Learn from our blogs.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Team" text-black>
                Join our team. :D
              </ListItem>
              <ListItem href="/" title="Contact" text-black>
              We’re happy to hear from you! 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          
          
        </NavigationMenuItem>
        
            
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"