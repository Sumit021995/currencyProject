import { useState } from 'react'
import useCurrencyHook from "./hooks/currencyHook";
import  { Input }  from './components/index';


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyHook = useCurrencyHook(from)
  const currencyOptions = Object.keys(currencyHook)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const clear= ()=>{
    setAmount(0)
    setFrom('usd')
    setTo('inr')
    setConvertedAmount(0)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyHook[to])
  }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{ 
                backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f9b913b-c48a-43ab-a9aa-26d4355d1d80/dgdgq41-18a39afc-bd2a-4226-80b1-66754639fd3a.png/v1/fill/w_1280,h_549,q_80,strp/space_art_6___4k_ultrawide_wallpaper_background_by_ixul_dgdgq41-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ5IiwicGF0aCI6IlwvZlwvNmY5YjkxM2ItYzQ4YS00M2FiLWE5YWEtMjZkNDM1NWQxZDgwXC9kZ2RncTQxLTE4YTM5YWZjLWJkMmEtNDIyNi04MGIxLTY2NzU0NjM5ZmQzYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zyyf2_r1WltyYezJeJVXKRfbi37213Oh-B7s5g79Pfs')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount = {amount}
                                currencyOptions ={currencyOptions}
                                onCurrencyChange ={(from)=>setFrom(from) }
                                selectCurrency ={from}
                                onAmountChange ={(amount)=> setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-0 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-20 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={clear}
                            >
                                Clear
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount = {convertedAmount}
                                currencyOptions ={currencyOptions}
                                onCurrencyChange ={(to)=> setTo(to)}
                                selectCurrency ={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

    
  
}

export default App
