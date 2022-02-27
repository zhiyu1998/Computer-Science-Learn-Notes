import java.util.ArrayList;
import java.util.List;

public class Test {

    public static void main(String[] args) {
        int i = new Test().numTrees(9);
        System.out.println(i);
        List<Integer> list = new ArrayList<>();
    }

    public int numTrees(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;

        for( int i = 2; i < n + 1; i++) {
            for ( int j = 1; j < i + 1; j++) {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }
        return dp[n];
    }
}
