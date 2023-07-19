

class ProjectList extends React.Component {

    render() {
        return (
            <>
                <h1>Project Portal</h1>
                <button id="unhide" className="btn btn-primary">Show all projects</button>
                <div className="clear"></div>
                <div>
                    <table width="100%" className="table-hover custom-table">
                        <tbody className="custom-tbody">
                            <tr>
                                <td><span>project 1</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 2</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 3</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 4</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 5</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 6</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 7</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>project 8</span><button type="button" className="hov btn-link"><span
                                    className="bi bi-star-fill"></span></button><button
                                        className="btn btn-primary hid">Hide</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}


