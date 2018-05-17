function Sum_Solution(n) {
    var result = 0;

    function fun(num) {
        result += num;
        num && fun(--num);
    }

    fun(n);
    return result;
}