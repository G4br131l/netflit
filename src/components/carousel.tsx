import * as React from "react"

import { ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel as CarouselCompenet,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface cardElemente {
  title: string
  link: string
}

interface CarouselInterface {
  title: string
  cards: cardElemente[]
}

export function Carousel() {
  const props: CarouselInterface = {
    title: "Our Genres"
  }

  return (
    <div className="relative flex flex-col w-8/10 border-2 rounded-xl text-text p-8">
      <div className="flex justify-between items-center h-24">
        <h2>{props.title}</h2>
        <div className=" bg-black p-3">progresso</div>
      </div>
      <div>
        <CarouselCompenet className="w-full" opts={{loop: false, slidesToScroll: 5}}>
          <CarouselPrevious className="" />
          <CarouselNext />
          <CarouselContent className="">
            {Array.from({ length: 20 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/5">
                <Card className="flex flex-col justify-between w-48 h-60 text-text">
                  <CardContent className="grid grid-cols-2 grid-rows-2 gap-1 w-full h-full">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="bg-amber-200 flex items-center justify-center">
                        foto{i}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between">
                      <span>
                        nome {index}
                      </span>
                      <Button variant="secondary" size="icon" className="size-8">
                        <ChevronRightIcon />
                      </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </CarouselCompenet>
      </div>
    </div>
  )
}
