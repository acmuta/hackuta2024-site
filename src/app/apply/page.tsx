import { headers } from 'next/headers'
import { getEnhancedSession} from '@/lib/utils/server'

export default function Apply(){


    const { user, perms } = getEnhancedSession(headers())
    console.log("apply page", user)
    return(
        <div>
            <h1>Apply</h1>
        </div>
    )

    // if (!user) {

    // }
}