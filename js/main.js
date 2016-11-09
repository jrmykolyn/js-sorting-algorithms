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


	/**
	 * ...
	 */
	function doBubbleSort( arr ) {
		// Create duplicate of `arr` arg. via `.slice()`.
		arr = arr.slice(0);

		// Assign `counter` in order to:
		// - record total loop iterations;
		// - have value to check against when attempting to exit loop.
		var counter = 0;

		// Initialize `performed_swap` to determine whether a
		// loop featured no 'swaps'.
		var performed_swap;

		// Repeat the block below until either:
		// - the `counter` var. is equal to the length of the input minus 1;
		// - OR
		// - No 'swaps' were performed during one loop over the input array.
		while ( counter < ( arr.length - 1 ) && performed_swap !== false ) {
			// Reset `performed_swap` to `false` at the beginning of each 'outer pass'
			performed_swap = false;

			// Loop over the array, excluding the last member.
			for ( var i = 0, x = ( arr.length - 1 ); i < x; i++ ) {
				// Store the values at the current and next indices.
				var current_val = arr[i],
					next_val = arr[i + 1];

				// If the 'current' value is greater than the 'next' value,
				// 'swap' them and update the `performed_swap` var.
				if ( current_val > next_val ) {
					arr[i] = next_val;
					arr[i + 1] = current_val;

					performed_swap = true;
				}
			}

			// Update `counter`
			counter++;
		}

		// Return the sorted array.
		return arr;
	}

	/**
	 * ...
	 */
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
	var arr1_sorted = doBubbleSort( arr1 );
	console.log( arr1 ); /// TEMP
	console.log( arr1_sorted ); /// TEMP

	var arr2_sorted = doBubbleSort( arr2 );
	console.log( arr2 ); /// TEMP
	console.log( arr2_sorted ); /// TEMP

	var arr3_sorted = doBubbleSort( arr3 );
	console.log( arr3 ); /// TEMP
	console.log( arr3_sorted ); /// TEMP

} );