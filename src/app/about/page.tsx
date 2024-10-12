import classNames from 'classnames'
import { Box } from '@/components/Box'
import Map from '@/components/Map/Map'

export default async function Dashboard() {
    const src = '/parking/parkingImage.jpg'
    return (
        <Box
            direction="column"
            className={classNames('pagePadding w-full text-white text-2xl')}
            style={{ flex: 1 }}
            gap="1rem"
        >
            <Map src={src}></Map>
            <Box
                direction="row"
                alignItems="start"
                wrap="wrap"
                className={classNames('flex-1 gap-8')}
            ></Box>
        </Box>
    )
}
