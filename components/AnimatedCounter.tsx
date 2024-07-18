import CountUp from "react-countup"

export const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full">
        <CountUp 
            start = {0.00}
            end = {amount}
            duration= {2}
            decimals={2}
            decimal="."
            prefix="₦"
            suffix=""    
        />
    </div>
  )
}
