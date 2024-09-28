const $input_plan = document.getElementById('input-plan');
const $plan_list = document.getElementById('plan-list');
const $do_list = document.getElementById('do-list');

$input_plan.addEventListener('keyup', function(event){
    if (event.code === 'Enter'){
        if ($input_plan.value.trim() != ''){
            const $plan = document.createElement("div");
            const $plan_name = document.createElement("div")
            const $plan_button = document.createElement("button")
            $plan_button.innerText = "완료"

            $plan_name.innerText = $input_plan.value;
            $input_plan.value = "";

            $plan.setAttribute("class", "plan-node")
            $plan_name.setAttribute("class", "plan-name")
            $plan_button.setAttribute("class", "plan-button")

            $plan_button.addEventListener('click', complete)

            $plan.appendChild($plan_name);
            $plan.appendChild($plan_button);
            $plan_list.appendChild($plan);
        }
}
});

function complete(){
    const $plan = this.parentElement
    this.innerText = "삭제"
    this.removeEventListener("click", complete);
    this.addEventListener("click", remove);
    this.style.background='rgb(243 168 168)';
    this.style.border='1px solid rgb(243 168 168)';
    $plan.remove()
    $do_list.appendChild($plan);
    
}

function remove(){
    this.removeEventListener("click", remove);
    const $plan = this.parentElement
    $plan.remove();
}