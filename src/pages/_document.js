import Document, {Html, Head, Main, NextScript} from 'next/document'
import { render } from 'react-dom';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)
        return {...initalProps}
    }
    render() {
        return(
            <Html>
                <Head> 
                        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800" rel="stylesheet"/>
                </Head>
                        
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )       
    }
}

export default MyDocument