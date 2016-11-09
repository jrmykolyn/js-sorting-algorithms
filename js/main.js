$( document ).ready( function() {
	/* -------------------------------------------------- */
	/* DECLARE VARS */
	/* -------------------------------------------------- */
	var arr1 = buildRandomIntegerArray( 5 ),
		arr2 = buildRandomIntegerArray( 10 ),
		arr3 = buildRandomIntegerArray( 25 );



	/* -------------------------------------------------- */
	/* DECLARE FUNCTIONS */
	/* -------------------------------------------------- */
	function buildRandomIntegerArray( arrayLength ) {
		arrayLength = ( typeof arrayLength === 'number' ) ? arrayLength : 10;

		var arr = [];

		for ( var i = 0; i < arrayLength; i ++ ) {
			arr.push( Math.round(Math.random()*100) );
		}

		return arr;
	}

	function doInsertionSort( arr ) {
		// Create duplicate of `arr` arg. via `.slice()`.
		arr = arr.slice(0);

		// Loop over `arr`.
		for ( var i = 0, x = arr.length; i < x; i++ ) {
			// If iteration is first in loop, skip logic.
			if ( i === 0 ) { continue; }

			// Assign local variables for:
			// - values to compare;
			// - position of value 'to check' 
			var current_val = arr[i];
			var check_pos = ( i - 1 );
			var check_val = arr[ check_pos ];

			// If the value 'to the left' is greater than the 'current' value,
			// and the position 'to the left' is 0 or greater:
			while ( check_pos >= 0 && current_val < check_val ) {
				// Swap the two values.
				arr[ check_pos ] = current_val;
				arr[ check_pos + 1 ] = check_val;

				// Decrement the position 'to check'.
				check_pos--;

				// Update the value 'to check'.
				check_val = arr[ check_pos ];
			}
		}

		// Return the sorted array.
		return arr;
 	}



	/* -------------------------------------------------- */
	/* INIT */
	/* -------------------------------------------------- */
	var arr1_sorted = doInsertionSort( arr1 );
	console.log( arr1 ); /// TEMP
	console.log( arr1_sorted ); /// TEMP

	var arr2_sorted = doInsertionSort( arr2 );
	console.log( arr2 ); /// TEMP
	console.log( arr2_sorted ); /// TEMP

	var arr3_sorted = doInsertionSort( arr3 );
	console.log( arr3 ); /// TEMP
	console.log( arr3_sorted ); /// TEMP

} );