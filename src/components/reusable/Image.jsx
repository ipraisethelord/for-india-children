import useImage from '../hooks/useImage'

import Typography from '@mui/material/Typography'; // simple plain-text react component
 /* @vite-ignore */ 
const Image = ({ fileName, alt, folder }) => {
   
    const { loading, error, image } = useImage(fileName, folder)

    if (error) return <Typography>{alt}</Typography>

    return (
        <>{ console.log(image)}
            {loading ? (
                <Typography>loading</Typography>
            ) : (
                <img                    
                    src={image}
                    alt={alt}
                    
                />
            )}
        </>
    )
}

export default Image