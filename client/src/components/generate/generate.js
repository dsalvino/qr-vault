import React from 'react';

const Generate = () => {
    return (
        <>
            <div className="col-md-7" id="aside">
                <div class="h-75 d-flex justify-content-center align-items-center">
                    <form class="col-md-5 form-background needs-validation" id="customer-form">
                        <div class="mx-auto my-auto">
                            <h3>Generate QR Code here</h3>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Example label</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Example label</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                            <div class="d-grid gap-1 mx-auto col-4 mt-3">
                                <button class="btn btn-primary" type="submit">Generate</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Generate;

