import React from 'react'
import { Button } from "@/components/ui/button";
const CustomButton = ({title, variant}: {title: string, variant:"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "custom" | null | undefined }) => {
  return (
    <Button className=" relative group shadow-[0px_0px_4px_0px_orange_inset,0px_-1px_2px_0px_orange_inset] " variant={variant}>
        {title}
        <span className="absolute inset-x-0 w-3/4 mx-auto bottom-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-[1px] "></span>
      <span className="absolute inset-x-0 bottom-px bg-gradient-to-r  from-transparent via-orange-500 to-transparent h-[8px] blur-sm w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 "></span>
      </Button>
  )
}

export default CustomButton