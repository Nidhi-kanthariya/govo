var count = 2;

function new_form() {
    count++;
    var mainForm = document.createElement("div"),
        e =
        `<div class="flex flex-col gap-4 m-0">
        <div>
            <label for="jobtitle">Job Title</label>
            <input type="text" id="jobtitle" placeholder="Enter your first name" required>
        </div>
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6 sm:col-span-12">
                <label for="companyName">Company Name</label>
                <input type="text" id="companyName" placeholder="Enter your first name" required>
            </div>
            <div class="col-span-6 sm:col-span-12">
                <label for="companyName">Experience Year</label>
                <div class="grid grid-cols-12 gap-5">
                    <div class="col-span-5 sm:col-span-12">
                        <select class="form-select block w-full px-3 text-xs font-normal text-content3 bg-white bg-clip-padding bg-no-repeat border border-border-light rounded-5 transition ease-in-out m-0 min-w-[150px] py-[9px]" id="sortby" aria-label="Default select example">
                            <option selected="">2017</option>
                            <option value="1">2018</option>
                            <option value="2">2019</option>
                            <option value="3">2020</option>
                            <option value="4">2021</option>
                            <option value="5">2022 </option>
                        </select>
                    </div>
                    <div class="col-auto flex items-center justify-center"> to </div>
                    <div class="col-span-5 sm:col-span-12">
                        <select class="form-select block w-full px-3 text-xs font-normal text-content3 bg-white bg-clip-padding bg-no-repeat border border-border-light rounded-5 transition ease-in-out m-0 min-w-[150px] py-[9px]" id="sortby" aria-label="Default select example">
                            <option selected="">2017</option>
                            <option value="1">2018</option>
                            <option value="2">2019</option>
                            <option value="3">2020</option>
                            <option value="4">2021</option>
                            <option value="5">2022</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div> 
            <label for="address">Job Description </label>
            <textarea class="p-[11px] focus:!border-border-light w-full border border-border-light rounded-5 text-xs text-content" placeholder="Enter your address.." row="3" id="address">  </textarea>
        </div>
        <div class="text-end">
            <a class="btn btn-primary text-xs text-white !w-fit sm:!w-full justify-center !m-0 py-2" href="javascript:deleteEl(1)" type="button">Delete </a>
        </div>
        </div>`
    e = (mainForm.innerHTML = document.getElementById("latestForm").innerHTML + e, document.getElementById("newForm").appendChild(mainForm), document.querySelectorAll("[data-trigger]"));
}

function deleteEl(mainForm) {
    mainForm = document.getElementById(mainForm);
    document.getElementById("newForm").removeChild(mainForm);
}