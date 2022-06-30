import React from 'react';

const styles = {
    width25: {
        width: "25%",
        "text-align": "center",
    },
};
class Spec extends React.Component<any, any>{
    constructor(props: any,context: any) {
        super(props, context);

    }

    render() {
        return (
            <div>
                <div className="wpb_text_column wpb_content_element  bs-vc-block">
                    <div className="wpb_wrapper">
                        <h3><strong><i className="fa fa-windows"></i> System Requirements</strong></h3>

                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr className="active">
                            <th className="head_center" style={styles.width25}>Item</th>
                            <th className="head_center" style={styles.width25}>Recommended Setting</th>
                            <th className="head_center" style={styles.width25}>Minimum Requirements</th>
                        </tr>
                        </thead>
                        <tbody className="head_center">
                        <tr>
                            <td>CPU</td>
                            <td>Pentium Core i3 5300 and above</td>
                            <td>Intel Pentium i3 5300 and above</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>4 GB and above</td>
                            <td>4 GB and above</td>
                        </tr>
                        <tr>
                            <td>Graphics</td>
                            <td>Nvidia GTX 250</td>
                            <td>Nvidia GTX 250</td>
                        </tr>
                        <tr>
                            <td>OS</td>
                            <td>Window 7 (64bit) or higher</td>
                            <td>Window 7 (64bit) and above</td>
                        </tr>
                        <tr>
                            <td>Direct X</td>
                            <td>DirectX9.0c or higher</td>
                            <td>DirectX9.0a or higher</td>
                        </tr>
                        <tr>
                            <td>Hard Disk</td>
                            <td>5 GB or less</td>
                            <td>5 GB or less</td>
                        </tr>
                        </tbody>
                    </table>
                    <p>&nbsp;</p>
                </div>
            </div>
        );
    }


}

export default Spec;
