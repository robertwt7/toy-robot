for FILE in tests/*.txt; do
output=$(echo $FILE | cut -d'.' -f 1)
node --experimental-modules index.js $FILE > $output.res
diff -wB $output.res $output.out
done