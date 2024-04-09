import { formatter } from "../util/investment";
export default function Result({ result }) {
    const initialInvestment =
        result[0].valueEndOfYear -
        result[0].interest -
        result[0].annualInvestment;
    return <table id="result">

        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>

            {result.map(rs => {
                const totalInterest =
                    rs.valueEndOfYear -
                    rs.annualInvestment * rs.year -
                    initialInvestment;
                const totalAmountInvested = rs.valueEndOfYear - totalInterest;
                return <tr key={rs.year}>
                    <td>{rs.year}</td>
                    <td>{formatter.format(rs.valueEndOfYear)}</td>
                    <td>{formatter.format(rs.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}