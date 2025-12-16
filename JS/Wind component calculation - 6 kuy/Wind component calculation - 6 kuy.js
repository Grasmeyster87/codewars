function windComponents(rwy, windDirection, windSpeed) {
    const rwyNum = parseInt(rwy);
    const rwyHeading = rwyNum * 10;
    const windDir = parseInt(windDirection);
    const windSpeedNum = parseInt(windSpeed);

    const angleRad = (windDir - rwyHeading) * Math.PI / 180;

    const HW = Math.round(Math.cos(angleRad) * windSpeedNum);
    const CW = Math.round(Math.sin(angleRad) * windSpeedNum);

    const headOrTail = HW >= 0 ? 'Headwind' : 'Tailwind';
    const crossDir = CW >= 0 ? 'right' : 'left'; 
    return `${headOrTail} ${Math.abs(HW)} knots. Crosswind ${Math.abs(CW)} knots from your ${crossDir}.`;
}


module.exports = windComponents;

