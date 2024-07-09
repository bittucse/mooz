import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCalls = () =>{
    const [calls,setCalls] = useState<Call[]>([]);
    const [isLoading,setIsLoading]=useState(false);
    const client= useStreamVideoClient();
    const {user}=useUser();

    useEffect(()=>{
        const loadCalls = async()=>{
            if(!client || !user?.id) return;
            setIsLoading(true)

            try {
                const {calls} = await client.queryCalls();
                
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }

        loadCalls();
    },[client,user?.id])
}