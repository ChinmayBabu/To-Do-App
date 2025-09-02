import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Switch } from './ui/switch'

const Theme = () => {

  const {theme, setTheme} = useTheme();
  const [checked,setChecked] = useState(theme === "dark")

  useEffect(()=>{
    setChecked(theme === "dark")
  },[theme])


  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={checked}
        onCheckedChange={(value) => {
          setChecked(value)
          setTheme(value ? "dark" : "light")
        }}
      />
      <span className="text-sm text-muted-foreground">
        {checked ? "Dark" : "Light"} Mode?
      </span>
    </div>
  )
}

export default Theme