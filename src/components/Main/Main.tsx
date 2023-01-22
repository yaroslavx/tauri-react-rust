import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import values from './mockData';
import styles from './Main.module.css'
import Plot from 'react-plotly.js';

const Main = () => {
    const [mockData, setMockData] = useState(values[0]);

    const count = useRef(0);
    useLayoutEffect(() => {
        const id = setInterval(() => {
            if (values[count.current]) setMockData(values[count.current]);
            count.current += 1;
            console.log(values[count.current])

        }, 1000);
        return () => clearInterval(id);
    }, []);

    const layout = {
        title: {
            text: '',
        },
        scene: {
            aspectratio: {
                x: 2.4,
                y: 1.2,
                z: 1.2,
            },
            xaxis: { nticks: 12 },
            yaxis: { nticks: 12 },
            zaxis: { nticks: 12 },
            camera: {
                projection: { type: 'orthographic' },
                eye: {
                    x: 0.6,
                    y: 2.2,
                    z: 0.4,
                },
            },
        },
    }

    return (
        <div className={styles.container}>
            <Plot
                data={[
                    {
                        type: 'volume',
                        flatshading: true,
                        lighting: {
                            facenormalsepsilon: 0,
                        },
                        colorbar: {
                            tick0: 0,
                            dtick: 100,
                            nticks: 10,
                        },
                        colorscale: [
                            [0, 'rgb(49,54,149)'],
                            [0.1, 'rgb(69,117,180)'],
                            [0.2, 'rgb(116,173,209)'],
                            [0.3, 'rgb(171,217,233)'],
                            [0.4, 'rgb(224,243,248)'],
                            [0.5, 'rgb(254,224,144)'],
                            [0.6, 'rgb(253,174,97)'],
                            [0.7, 'rgb(244,109,67)'],
                            [0.8, 'rgb(215,48,39)'],
                            [1, 'rgb(165,0,38)'],
                        ],
                        reversescale: false,
                        opacityscale: [
                            [0.0, 0.1],
                            [0.2, 0.2],
                            [0.35, 0.35],
                            [0.5, 0.5],
                            [0.65, 0.65],
                            [0.8, 0.8],
                            [1.0, 1.0],
                        ],
                        opacity: 1,
                        surface: { show: true, fill: 1.0, count: 64 },
                        spaceframe: { show: true, fill: 1.0 },
                        slices: {
                            x: { show: true },
                            y: { show: true },
                            z: { show: true },
                        },
                        caps: {
                            x: { show: true, fill: 1.0 },
                            y: { show: true, fill: 1.0 },
                            z: { show: true, fill: 1.0 },
                        },
                        value: mockData,
                        x: [
                            1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
                            3, 4, 5,

                            1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
                            3, 4, 5,

                            1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
                            3, 4, 5,

                            1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2,
                            3, 4, 5,
                        ],
                        y: [
                            1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
                            5, 5, 5,

                            1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
                            5, 5, 5,

                            1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
                            5, 5, 5,

                            1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5,
                            5, 5, 5,
                        ],
                        z: [
                            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            0, 0, 0,

                            40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40,
                            40, 40, 40, 40, 40, 40, 40, 40, 40,

                            80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80,
                            80, 80, 80, 80, 80, 80, 80, 80, 80,

                            120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
                            120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120,
                        ],
                    },
                ]}
                layout={layout}
                useResizeHandler
                style={{ width: '100%', height: '100%' }}
                config={{
                    displaylogo: false,
                    displayModeBar: false,
                    responsive: true,
                }}
            />
        </div>
    );
};

export default Main;