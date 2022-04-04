package future;

/**
 * desc: 不能抛出checked Exception
 */
public class RunnableCantThrowsException {

    public static void main(String[] args) {
        Runnable runnable = () -> {
            try {
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }
        };
    }
}
