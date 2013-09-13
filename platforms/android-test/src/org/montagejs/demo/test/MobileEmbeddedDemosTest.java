package org.montagejs.demo.test;

import junit.framework.Assert;

import org.apache.cordova.Config;
import org.montagejs.demo.MobileEmbeddedDemos;

import android.test.ActivityInstrumentationTestCase2;
import android.util.Log;

public class MobileEmbeddedDemosTest extends
		ActivityInstrumentationTestCase2<MobileEmbeddedDemos> {
	public MobileEmbeddedDemos mActivity;

	public MobileEmbeddedDemosTest(Class<MobileEmbeddedDemos> activityClass) {
		super(activityClass);
		Log.d("MobileEmbeddedDemos", "Created MobileEmbeddedDemosTest");
	}

	public MobileEmbeddedDemosTest() {
		super(MobileEmbeddedDemos.class);
		Log.d("MobileEmbeddedDemos", "Public MobileEmbeddedDemosTest");
	}

	@Override
	protected void runTest() throws Throwable {
		super.runTest();
		Log.d("MobileEmbeddedDemos", "Run test");
	}

	public void testPlaceholder() throws Throwable {
		Assert.assertNotNull(mActivity);

		boolean placeholder = true;
		Assert.assertTrue(placeholder);
	}

	public void testPopcorn() throws Throwable {
		Assert.assertNotNull(mActivity);
		mActivity.loadUrl("file:///android_asset/node_modules/popcorn/builds/popcorn/index.html");
		
		Assert.assertEquals(mActivity.backHistory(), true);
	}

	
	@Override
	protected void setUp() throws Exception {
		mActivity = this.getActivity();
		super.setUp();
		Log.d("MobileEmbeddedDemos", "Set up");
	}

	@Override
	protected void tearDown() throws Exception {
		super.tearDown();
		Log.d("MobileEmbeddedDemos", "Tear down");
	}

}
