public class UserMapper {
    public void mapCsvLine(String[] csvLine) {
        if (csvLine.length < 4) {
            // Handle the case when the array has less than 4 elements
            // For example, you can throw a custom exception or log an error
            throw new RuntimeException("Invalid CSV line: " + String.join(",", csvLine));
        }
        // Now it's safe to access the 4th element (index 3)
        String fourthElement = csvLine[3];
        // Rest of the method implementation...
    }
}