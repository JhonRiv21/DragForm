import { Button } from "@/components/ui/button"

type Props = {
  text?: string
}

export const ButtonField = ({ text = "Submit" }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>{text}</Button>
    </div>
  )
}