// import { Heart } from "lucide-react"

// import { Button } from "@/components/ui/button"

// export function ButtonWithIcon() {
//   return (
//     <Button>
//       <Heart className="mr-2 h-4 w-4" />
//     </Button>
    
//   )
// }


import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function ButtonDemo() {
  return <Button>Add to favorites <Heart/></Button>
}
