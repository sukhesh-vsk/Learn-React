import Counter from "./Counter";

export default function Buttons() {
    var count = 0;
    return (
        <div>
            <button onclick={count++}>Increment</button>
            <button onclick={count--}>Decrement</button>
            <Counter val={count} />
        </div>
    );
}